import React from "react";
import NotesLayout from "@/components/NotesLayout";
import Tabs, { Tab } from "@/components/Tabs";

export const metadata = {
  title: "Part VII - Shark Notes",
  description:
    "Notes on Part VII of the book about Shackleton&apos;s Expedition",
};

export default function PartVII() {
  return (
    <NotesLayout title="Part VII">
      <Tabs>
        <Tab title="1">To do</Tab>
        <Tab title="2">To do</Tab>
        <Tab title="3">To do</Tab>
      </Tabs>
    </NotesLayout>
  );
}
