"use client";

import { createContext } from "react";
import type { SessionEntity } from "./types";

export const SessionContext = createContext<SessionEntity | null>(null);
