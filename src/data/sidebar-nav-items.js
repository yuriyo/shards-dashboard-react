export default function() {
  return [
    {
      title: "Accounti⚙ Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Applications",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Agencies",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Presets",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
