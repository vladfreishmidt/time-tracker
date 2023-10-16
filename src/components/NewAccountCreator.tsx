"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createAccount } from "@/actions";

type Props = {};

const NewAccountCreator: React.FC<Props> = () => {
  const [editMode, setEditMode] = useState(false);

  if (!editMode)
    return (
      <Button onClick={() => setEditMode(true)} className="text-left">
        + New Account
      </Button>
    );

  return (
    <form
      action={createAccount}
      onSubmit={() => setEditMode(false)}
      className="flex flex-wrap gap-1"
    >
      <Input
        type="text"
        name="name"
        placeholder="Account name"
        className="text-slate-900"
      />
      <Button onClick={() => setEditMode(true)}>Create</Button>
      <Button onClick={() => setEditMode(false)}>Cancel</Button>
    </form>
  );
};

export default NewAccountCreator;
