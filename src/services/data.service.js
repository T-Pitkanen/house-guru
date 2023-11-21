let postData = [];

/*
export const getPostData = async () => {
  const url = "/api/posts";
  const response = await fetch(url);
  const data = await response.json();
  postData = data;

  return data;

}; */

export const getPostData = async () => {
  const data = await getPostDataMock();
  postData = data;

  return data;
};

export const getPostById = async (id) => {
  console.log(postData);

  if (postData.length === 0) {
    await getPostData();
  }

  return postData.find((post) => post._id === id);
};

export const getPostDataMock = async () => {
  return [
    {
      _id: "6418576e26d8eda8bbe16729",
      title: "Housing Solutions During a Divorce",
      subtitle: "Subtitle",
      image: "/blog/blog-divorce.jpg",
    },
    {
      _id: "6418576e26d8eda8bbe16728",
      title: "Are you dreaming of buying your first home?",
      subtitle: "Subtitle",
      image: "/blog/blog-first.jpg",
    },
    {
      _id: "6418576e26d8eda8bbe167ddddd29",
      title: "Buying a House",
      subtitle: "Subtitle",
      image: "/blog/blog-buy.jpg",
    },
    {
      _id: "2332233423234423324243423",
      title: "When Life Takes Unexpected Turns",
      subtitle: "Subtitle",
      image: "/blog/blog-loss.jpg",
    },
    {
      _id: "233423",
      title: "Home choice in Retirement",
      subtitle: "Subtitle",
      image: "/blog/blog-pension.jpg",
    },
    {
      _id: "23423423423",
      title: "Selling your House",
      subtitle: "Subtitle",
      image: "/blog/blog-sell.jpg",
    },
    {
      _id: "34234234423",
      title: "Experience the beauty of summer - Find your dream summer house",
      subtitle: "Subtitle",
      image: "/blog/blog-summer.jpg",
    },
  ];
};

export const createPost = async (post) => {
  return fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((response) => {
    return response.json();
  });
};

export const updatePost = async (post) => {
  return fetch("/api/posts", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((response) => {
    return response.json();
  });
};
