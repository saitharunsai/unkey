"use client";
// biome-ignore lint: React in this context is used throughout, so biome will change to types because no APIs are used even though React is needed.
import * as React from "react";
import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Dialog, DialogContent } from "./parts/dialog";
import {
  DefaultDialogContentArea,
  DefaultDialogFooter,
  DefaultDialogHeader,
} from "./parts/dialog-parts";

type DialogContainerProps = PropsWithChildren<{
  className?: string;
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  title: string;
  footer?: ReactNode;
  contentClassName?: string;
  preventAutoFocus?: boolean;
  subTitle?: string;
}>;

export const DialogContainer = ({
  className,
  isOpen,
  subTitle,
  onOpenChange,
  title,
  children,
  footer,
  contentClassName,
  preventAutoFocus = true,
}: DialogContainerProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "drop-shadow-2xl border-gray-4 max-h-[90vh] overflow-y-auto !rounded-2xl p-0 gap-0",
          "w-[90%] md:w-[70%] lg:w-[70%] xl:w-[50%] 2xl:w-[45%] max-w-[600px] max-h-[90vh] sm:max-h-[90vh] md:max-h-[70vh] lg:max-h-[90vh] xl:max-h-[80vh]",
          className,
        )}
        onOpenAutoFocus={(e) => {
          if (preventAutoFocus) {
            e.preventDefault();
          }
        }}
      >
        <DefaultDialogHeader title={title} subTitle={subTitle} />
        <DefaultDialogContentArea className={contentClassName}>{children}</DefaultDialogContentArea>
        {footer && <DefaultDialogFooter>{footer}</DefaultDialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export { DefaultDialogHeader, DefaultDialogContentArea, DefaultDialogFooter };
