const unreadNumber = document.querySelector(".unread-notifications");
const allReadBtn = document.querySelector(".notifications__header button");
const notificationListItems = document.querySelectorAll(
  ".notification-list-item"
);

allReadBtn.addEventListener("click", () => {
  notificationListItems.forEach((notificationListItem) => {
    if (notificationListItem.classList.contains("unread")) {
      const unreadIcon = notificationListItem.querySelector(
        ".unread-icon-container"
      );
      unreadNumber.textContent = "0";
      unreadIcon.classList.add("hide");
      notificationListItem.classList.remove("unread");
    }
  });
});