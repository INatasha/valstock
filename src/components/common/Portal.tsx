import { useState, useLayoutEffect, ReactPortal } from "react";
import { createPortal } from "react-dom";

type ContainerId = string;

type PortalProps = {
  children: JSX.Element | JSX.Element[];
  containerId?: ContainerId;
};

const defaultContainerId = "portal-root";

function createContainerAndAppendToBody(
  containerId: ContainerId = defaultContainerId
) {
  const containerElement = document.createElement("div");
  containerElement.setAttribute("id", containerId);
  document.body.appendChild(containerElement);
  return containerElement;
}

function Portal({
  children,
  containerId = defaultContainerId,
}: PortalProps): ReactPortal | null {
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(containerId);
    let containerCreated = false;

    if (!element) {
      containerCreated = true;
      element = createContainerAndAppendToBody(containerId);
    }
    setContainerElement(element);

    return () => {
      if (containerCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [containerId]);

  if (containerElement === null) return null;

  return createPortal(children, containerElement);
}

export default Portal;
