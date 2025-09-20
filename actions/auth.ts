"use client";

import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export type Email = `${string}@${string}.${string}`;

export type TResponse = {
  status: "success" | "failed" | "error";
  code: number;
  message?: string;
  data?: any;
};

export async function verifyEmail(email: Email): Promise<TResponse> {
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user)
      return {
        status: "failed",
        code: 404,
        message: "Email not registered",
      };

    return {
      status: "success",
      code: 200,
      data: {
        email,
      },
    };
  } catch (error: any) {
    return {
      status: "error",
      code: 500,
      message: "Failed to verify email",
    };
  }
}
