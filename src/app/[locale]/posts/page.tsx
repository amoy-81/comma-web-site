import { getRandomPostsAction } from "@/api/post";
import initTranslations from "@/i18n";
import { detectDirection } from "@/utils/detect-direction.util";
import React from "react";

type PostsProps = {
  params: Promise<{
    locale: string;
  }>;
};

const i18nNamespaces = ["default"];

const PostsPage = async ({ params }: PostsProps) => {
  const { locale } = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  const posts = await getRandomPostsAction({ page: 1, pageSize: 20 });

  return (
    <section className="mt-24">
      <h1 className="text-primary-600 font-bold mx-4 text-lg text-center">
        {t("someUserPosts")}
      </h1>

      <div className="grid grid-cols-12 gap-4 my-6 p-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative xl:col-span-3 md:col-span-6 col-span-12 bg-gradient-to-r from-secondary-600 to-tertiary-600 rounded-md overflow-hidden shadow-md"
          >
            <img
              src={post.image_content || "/box-pattern.svg"}
              alt="Post Image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative z-10 w-full h-full bg-black/50 p-4">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={post.user.avatar || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4" dir={detectDirection(post.text_content)}>
                {post.text_content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsPage;
