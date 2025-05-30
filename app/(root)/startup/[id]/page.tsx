import React from "react";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return <div className="text-3xl">{post.title}</div>;
};

export default Page;
