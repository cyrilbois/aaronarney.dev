import * as React from "react";
import { Helmet } from "react-helmet";

import Archive from "../components/archive";
import Layout from "../components/layout";
import { ReactComponentElement } from "react";

export default function GuestPosts(): ReactComponentElement<any> {
    const edges = [
        {
            node: {
                frontmatter: {
                    title: "Refactoring JavaScript",
                    date: "2018-10-18",
                    path:
                        "https://www.leapsparkagency.com/blog/leap-spark/2018/10/17/refactoring-javascript",
                    category: "web",
                },
            },
        },
        {
            node: {
                frontmatter: {
                    title: "Accessibility Compliance",
                    date: "2018-12-12",
                    path:
                        "https://www.leapsparkagency.com/blog/leap-spark/2018/12/12/accessibility-compliance",
                    category: "web",
                },
            },
        },
        {
            node: {
                frontmatter: {
                    title: "Creating a Simple Game with Phaser",
                    date: "2019-02-13",
                    path:
                        "https://www.leapsparkagency.com/blog/leap-spark/2019/02/13/creating-a-simple-game-with-phaser",
                    category: "web",
                },
            },
        },
        {
            node: {
                frontmatter: {
                    title: "Migrating from SASS to PostCSS",
                    date: "2019-03-18",
                    path:
                        "https://www.leapsparkagency.com/blog/leap-spark/2019/03/18/migrating-from-sass-to-postcss",
                    category: "web",
                },
            },
        },
        {
            node: {
                frontmatter: {
                    title: "What is Personalization",
                    date: "2019-07-30",
                    path:
                        "https://www.progress.com/blogs/what-is-personalization",
                    category: "web",
                },
            },
        },
        {
            node: {
                frontmatter: {
                    title: "Regular Expressions for Regular People",
                    date: "2019-02-07",
                    path:
                        "https://alligator.io/js/regular-expressions-for-regular-people/",
                    category: "web",
                },
            },
        },
        {
            node: {
                frontmatter: {
                    title: "How Cryptographic Randomness with Entropy Vaguely Works",
                    date: "2020-07-16",
                    path:
                        "https://dev.to/aaronarney/how-cryptographic-randomness-with-entropy-vaguely-works-2ocg",
                    category: "software",
                },
            },
        },
        {
            node: {
                frontmatter: {
                    title: "TypeScript Generics Simply Put",
                    date: "2020-08-13",
                    path:
                        "https://dev.to/aaronarney/typescript-generics-simply-put-3i9o",
                    category: "web",
                },
            },
        },
    ];

    return (
        <Layout>
            <div style={{ marginTop: "75px" }}>
                <Helmet
                    title="Guest Posts | Aaron Arney"
                    bodyAttributes={{
                        class: "archive",
                    }}
                />

                <div className="stack max-w-screen-lg mx-auto">
                    <h1 className="mb-20 block">Guest Posts</h1>
                </div>

                <Archive centered={true} posts={edges} />
            </div>
        </Layout>
    );
}
