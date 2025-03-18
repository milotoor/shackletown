import React from "react";
import NotesLayout from "@/components/NotesLayout";
import Tabs, { Tab } from "@/components/Tabs";

export const metadata = {
  title: "Part V - Shark Notes",
  description: "Notes on Part V of the book about Shackleton&apos;s Expedition",
};

export default function PartV() {
  return (
    <NotesLayout title="Part V">
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
