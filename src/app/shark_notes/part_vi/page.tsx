import React from "react";
import NotesLayout from "@/components/NotesLayout";
import Tabs, { Tab } from "@/components/Tabs";

export const metadata = {
  title: "Part VI - Shark Notes",
  description:
    "Notes on Part VI of the book about Shackleton&apos;s Expedition",
};

export default function PartVI() {
  return (
    <NotesLayout title="Part VI">
      <Tabs>
        <Tab title="1">To do</Tab>
        <Tab title="2">To do</Tab>
        <Tab title="3">To do</Tab>
        <Tab title="4">To do</Tab>
        <Tab title="5">To do</Tab>
        <Tab title="6">To do</Tab>
      </Tabs>
    </NotesLayout>
  );
}
