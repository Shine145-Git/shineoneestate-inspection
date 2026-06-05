-- CreateTable
CREATE TABLE "inspection_requests" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "propertyLocation" TEXT NOT NULL,
    "preferredDate" TIMESTAMP(3) NOT NULL,
    "preferredTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inspection_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "inspection_requests_createdAt_idx" ON "inspection_requests"("createdAt");
