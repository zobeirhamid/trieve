import { createQuery } from "@tanstack/solid-query";
import { DatasetContext } from "../layouts/TopBarLayout";
import { getQueriesForTopic, getTrendsBubbles } from "../api/trends";
import { createSignal, For, Show, useContext } from "solid-js";
import { SearchClusterTopics, SearchQueryEvent } from "shared/types";
import { toTitleCase } from "../utils/titleCase";
import { parseCustomDateString } from "../components/charts/LatencyGraph";
import { FullScreenModal } from "shared/ui";

const WIPWarning = () => {
  return (
    <div class="rounded border border-blue-200 bg-blue-100/60 p-3 text-blue-900">
      <div>
        Note: The Trend Explorer is a Work In Progress. We are working hard to
        help you visualize trends in your searches over time. For questions or
        suggestions, please reach out to us at{" "}
        <a class="underline" href="mailto:humans@trieve.ai">
          humans@trieve.ai
        </a>{" "}
        or{" "}
        <a href="https://cal.com/nick.k/meet" class="underline">
          schedule a meeting
        </a>
        .
      </div>
    </div>
  );
};

export const TrendExplorer = () => {
  const dataset = useContext(DatasetContext);

  const trendsQuery = createQuery(() => ({
    queryKey: ["trends", { dataset: dataset().dataset.id }],
    queryFn: async () => {
      return getTrendsBubbles(dataset().dataset.id);
    },
  }));

  return (
    <div class="p-8">
      <WIPWarning />
      <div class="h-8" />
      <div class="rounded-md border border-neutral-200 bg-white">
        <table class="mt-2 w-full">
          <thead>
            <tr>
              <th class="p-2 text-left font-semibold">Topic</th>
              <th class="p-2 text-right font-semibold">Density</th>
              <th class="p-2 text-right font-semibold">Average Score</th>
            </tr>
          </thead>
          <tbody>
            <For
              fallback={<div class="px-2 py-4 opacity-40" />}
              each={trendsQuery.data}
            >
              {(topic) => (
                <TopicRow
                  datasetId={dataset().dataset.id || ""}
                  topic={topic}
                />
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface TopicRowProps {
  topic: SearchClusterTopics;
  datasetId: string;
}

const TopicRow = (props: TopicRowProps) => {
  const [open, setOpen] = createSignal(false);

  const selectedTopicQuery = createQuery(() => ({
    queryKey: ["selected-topic", props.topic.id],
    queryFn: async () => {
      return getQueriesForTopic(props.datasetId, props.topic.id);
    },
    enabled: open(),
  }));

  return (
    <>
      <tr onClick={() => setOpen(true)} class="border-b border-neutral-200">
        <td class="p-2">{props.topic.topic}</td>
        <td class="p-2 text-right">{props.topic.density}</td>
        <td class="p-2 text-right">{props.topic.avg_score}</td>
      </tr>
      <FullScreenModal setShow={setOpen} show={open}>
        <div>Searches</div>
        <Show when={selectedTopicQuery.data}>
          {(searches) => (
            <For each={searches()}>{(search) => <div>{search.query}</div>}</For>
          )}
        </Show>
      </FullScreenModal>
    </>
  );
};

interface SearchQueryEventModalProps {
  searchEvent: SearchQueryEvent;
}
export const SearchQueryEventModal = (props: SearchQueryEventModalProps) => {
  return (
    <div class="min-w-60 pt-4">
      <SmallCol
        value={parseCustomDateString(
          props.searchEvent.created_at,
        ).toLocaleString()}
        label="Results Obtained"
      />
      <SmallCol
        value={props.searchEvent.results.length}
        label="Results Obtained"
      />
      <SmallCol
        value={toTitleCase(props.searchEvent.search_type)}
        label="Search Type"
      />
      <SmallCol value={props.searchEvent.latency + "ms"} label="Latency" />
      <SmallCol value={props.searchEvent.top_score} label="Top Score" />
    </div>
  );
};

interface SmallColProps {
  label: string;
  value: string | number;
}
const SmallCol = (props: SmallColProps) => {
  return (
    <div class="flex items-center justify-between gap-8">
      <div class="text-neutral-500">{props.label}</div>
      <div class="text-neutral-700">{props.value}</div>
    </div>
  );
};
