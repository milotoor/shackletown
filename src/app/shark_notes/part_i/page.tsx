import React from "react";
import NotesLayout from "@/components/NotesLayout";
import Tabs, { Tab } from "@/components/Tabs";

export const metadata = {
  title: "Part I - Shark Notes",
  description: "Notes on Part I of the book about Shackleton&apos;s Expedition",
};

export default function PartI() {
  return (
    <NotesLayout title="Part I">
      <Tabs>
        <Tab title="1">To do</Tab>
        <Tab title="2">To do</Tab>
        <Tab title="3">To do</Tab>
        <Tab title="4">To do</Tab>
        <Tab title="5">To do</Tab>
        <Tab title="6">To do</Tab>
        <Tab title="7">To do</Tab>
        <Tab title="8">To do</Tab>
      </Tabs>
    </NotesLayout>
  );
}
