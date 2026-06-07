import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const stats = await Promise.all([
      prisma.book.count(),
      prisma.bookPage.count(),
      prisma.user.count(),
      prisma.category.count(),
    ]);

    return NextResponse.json(
      {
        success: true,
        data: {
          totalBooks: stats[0],
          totalPages: stats[1],
          totalUsers: stats[2],
          totalCategories: stats[3],
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch statistics" },
      { status: 500 }
    );
  }
}
