/**
 * This Method will set scroll value to element provided
 * @param {Element} el - any dom element
 * @param {Number} top - scroll value
 */
function scrollTo(scrollElement, top) {
  scrollElement.current.scrollTop = top;
}

/**
 * This method calculates provided menu element with menu item (focused) and scrolls menu up down
 * @export
 * @param {Element} menuElement - menu dom node
 * @param {Element} menuItemElement - menu item dom node
 */
export function scrollIntoView(menuElement, menuItemElement) {
  const menuItemRect = menuItemElement.current.getBoundingClientRect();
  const menuRect = menuElement.current.getBoundingClientRect();
  const overScroll = menuItemElement.current.offsetHeight / 3;
  if (menuItemRect.bottom + overScroll > menuRect.bottom) {
    // next of last visible element available
    // scroll down
    scrollTo(
      menuElement,
      Math.min(
        menuItemElement.current.offsetTop +
          menuItemElement.current.clientHeight -
          menuElement.current.offsetHeight +
          overScroll,
        menuElement.current.scrollHeight
      )
    );
  } else if (menuItemRect.top - overScroll < menuRect.top) {
    // scroll up
    scrollTo(
      menuElement,
      Math.max(menuItemElement.current.offsetTop - overScroll, 0)
    );
  }
}
