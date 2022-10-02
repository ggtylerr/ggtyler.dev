import React, { cloneElement, useMemo, useState } from "react";
import {
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  useId,
  useClick,
  FloatingFocusManager
} from "@floating-ui/react-dom-interactions";
import { mergeRefs } from "react-merge-refs";

export const Popover = ({ children, render, placement }) => {
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(5), flip(), shift()],
    placement,
    whileElementsMounted: autoUpdate
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context)
  ]);

  // Preserve the consumer's ref
  const ref = useMemo(() => mergeRefs([reference, children.ref]), [
    reference,
    children
  ]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      {open && (
        <FloatingFocusManager
          context={context}
          modal={false}
          order={["reference", "content"]}
          returnFocus={false}
        >
          <div
            ref={floating}
            className="Popover"
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0
            }}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            {...getFloatingProps()}
          >
            {render({
              labelId,
              descriptionId,
              close: () => {
                setOpen(false);
              }
            })}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};
