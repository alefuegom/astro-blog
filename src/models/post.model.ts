export interface IPost {
  title: string;
  shortDescription: string;
  author: string;
  publishDate: Date;
  category: string;
  image: string;
}

export const postMockList: Array<IPost> = [
  {
    title: "Topic Suggestions for Millions of Repositories",
    shortDescription:
      "We recently launched Topics, a new feature that lets you tag your repositories with descriptive words or phrases, making it easy to discover projects and explore GitHub.com.",
    author: "Alejandro Fuentes Gómez",
    publishDate: new Date(),
    category: "User Experience",
    image: "https://github.blog/wp-content/uploads/2021/02/card.png?w=1200",
  },
  {
    title: "Accessibility considerations behind code search and code view",
    shortDescription:
      "Accessibility considerations behind code search and code view",
    author: "Alejandro Fuentes Gómez",
    publishDate: new Date(),
    category: "User Experience",
    image:
      "https://github.blog/wp-content/uploads/2023/05/1200.630-Productivity-wLogo@2x.png?w=1600",
  },
  {
    title: "Design’s journey towards accessibility",
    shortDescription:
      "Design can have a significant impact on delivering accessible experiences to our users. It takes a cultural shift, dedicated experts, and permission to make progress over perfection in order to build momentum. We’ve got a long way to go, but we’re starting to see a real shift in our journey to make GitHub a true home for all developers.",
    author: "Alejandro Fuentes Gómez",
    publishDate: new Date(),
    category: "User Experience",
    image:
      "https://github.blog/wp-content/uploads/2023/05/design-journey-blog-image-2x-1.png?w=1200",
  },
  {
    title: "A formal spec for GitHub Flavored Markdown",
    shortDescription:
      "We’re releasing a formal specification of the syntax for GitHub Flavored Markdown, and its corresponding reference implementation.",
    author: "Alejandro Fuentes Gómez",
    publishDate: new Date(),
    category: "User Experience",
    image:
      "https://github.blog/wp-content/uploads/2024/08/1200x630-Blog-Banner-Light-Mode-2.png?w=800",
  },
];
