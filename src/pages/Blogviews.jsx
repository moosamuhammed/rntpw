import React, { useState } from "react";

const blogPosts = {
  mindfulness: {
    title: "The Art of Mindful Living",
    image:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eos voluptas vitae doloremque repudiandae dolore ipsum consequuntur et, autem facilis, accusantium adipisci? Accusamus consequuntur dolores necessitatibus. Debitis eum laborum dignissimos ratione in amet id sunt quo voluptates totam facere esse quia dolor quae ut velit similique sapiente soluta, reprehenderit eius iusto tenetur corrupti ducimus delectus. Possimus placeat consequuntur ipsam exercitationem. Cum culpa magnam, inventore numquam ducimus dicta fugit doloribus iure quam sed perferendis repellat quo, temporibus aut necessitatibus aperiam nulla ullam quaerat? Totam, rerum accusamus maxime rem dolor voluptates dolore, corrupti dicta quis impedit obcaecati! Temporibus quia optio ullam quibusdam? Mindful living means bringing awareness to every moment and embracing it without judgment. Start with small practices like mindful walking or simple breathwork.`,
    peragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolore ad! Sequi aspernatur voluptas magni, nulla natus cumque dolorem laboriosam maiores deleniti unde rerum cupiditate beatae sit tenetur pariatur quasi fugiat atque saepe nostrum error recusandae ut. Earum adipisci amet quas inventore quam aperiam nemo quis soluta nobis voluptatem totam in corporis assumenda officiis quos natus, dolorem debitis, iusto repudiandae. Accusantium aut magni, consequatur molestias adipisci officia. Veniam totam ab nam similique nostrum doloremque, aperiam rem eaque sapiente consectetur eos error sint? Voluptatem impedit amet voluptas, perspiciatis saepe voluptates! Veritatis enim sit facere vel repellat, officia repellendus autem accusantium optio.`,
  },
  yoga: {
    title: "Yoga for Inner Peace",
    image:
      "https://images.pexels.com/photos/3852136/pexels-photo-3852136.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo minima optio totam repellat, dolorem harum, soluta consectetur earum modi, voluptas eaque sunt. Minus ab ea ex obcaecati atque omnis magnam, est incidunt dolorem placeat molestias nam architecto deleniti at provident non nesciunt. Maxime dolor voluptatibus, fuga voluptates numquam ipsum animi tempore repudiandae quos id ea ducimus, dolore illum aliquid sapiente commodi, minima voluptatem odit earum a obcaecati! Ipsam architecto, numquam quos eius ipsa deserunt aut quaerat doloribus dolorum quam soluta ratione nostrum, impedit quod vero assumenda, libero molestias maxime! Aliquid iusto obcaecati deleniti quas, est commodi nisi quaerat beatae aperiam! Yoga connects the mind and body, helping reduce stress and increase flexibility. Incorporating regular sessions can bring long-term mental clarity.`,
    peragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolore ad! Sequi aspernatur voluptas magni, nulla natus cumque dolorem laboriosam maiores deleniti unde rerum cupiditate beatae sit tenetur pariatur quasi fugiat atque saepe nostrum error recusandae ut. Earum adipisci amet quas inventore quam aperiam nemo quis soluta nobis voluptatem totam in corporis assumenda officiis quos natus, dolorem debitis, iusto repudiandae. Accusantium aut magni, consequatur molestias adipisci officia. Veniam totam ab nam similique nostrum doloremque, aperiam rem eaque sapiente consectetur eos error sint? Voluptatem impedit amet voluptas, perspiciatis saepe voluptates! Veritatis enim sit facere vel repellat, officia repellendus autem accusantium optio.`,
  },
  meditation: {
    title: "Meditation Basics",
    image:
      "https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2908175/pexels-photo-2908175.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt inventore ex aut sit error aperiam optio, officiis natus odio soluta laudantium assumenda! Ipsum impedit nam architecto repudiandae maiores iure deleniti voluptates nobis nemo aut modi ea aliquam, doloremque odit a necessitatibus quidem alias! Voluptatum commodi perferendis porro fugit. Minima iure cupiditate accusantium, velit officia consequatur mollitia magni quod eum consequuntur veniam quaerat delectus nihil deserunt enim autem eos fugiat quae libero aliquam recusandae. Iste dolorem inventore praesentium, fugit vel reprehenderit cum, molestiae nemo sed alias debitis, amet fugiat quos dolores dolore quidem perspiciatis soluta adipisci eveniet. Et, ullam vel. Meditation trains attention and awareness, and helps achieve mental clarity and emotional calm. Even 5 minutes a day can make a difference.`,
    peragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolore ad! Sequi aspernatur voluptas magni, nulla natus cumque dolorem laboriosam maiores deleniti unde rerum cupiditate beatae sit tenetur pariatur quasi fugiat atque saepe nostrum error recusandae ut. Earum adipisci amet quas inventore quam aperiam nemo quis soluta nobis voluptatem totam in corporis assumenda officiis quos natus, dolorem debitis, iusto repudiandae. Accusantium aut magni, consequatur molestias adipisci officia. Veniam totam ab nam similique nostrum doloremque, aperiam rem eaque sapiente consectetur eos error sint? Voluptatem impedit amet voluptas, perspiciatis saepe voluptates! Veritatis enim sit facere vel repellat, officia repellendus autem accusantium optio.`,
  },
  wellness: {
    title: "Holistic Wellness",
    image:
      "https://images.pexels.com/photos/373939/pexels-photo-373939.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/4056523/pexels-photo-4056523.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5491163/pexels-photo-5491163.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo voluptatibus pariatur dolor nulla illum, ipsum veritatis unde incidunt hic, natus laborum deserunt exercitationem corporis sequi non perferendis totam magnam qui officiis aliquam soluta. Tempora assumenda ipsum laboriosam accusantium asperiores, autem, cumque dolorem rerum nobis et suscipit repellendus! Ratione eum error qui aperiam. Doloribus magni vitae eveniet! Totam, velit. Voluptatibus non aspernatur corporis, expedita dicta nam inventore voluptate perferendis magni ipsam quibusdam cupiditate modi earum sit rem similique ad dolorem deserunt ipsa. Exercitationem, sed quaerat illo fuga deserunt architecto praesentium esse. A ea nostrum iusto velit nobis quibusdam deserunt modi dolorem. Holistic wellness includes physical, emotional, and spiritual health. Balance your lifestyle with exercise, mindfulness, and a healthy diet.`,
    peragraph: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolore ad! Sequi aspernatur voluptas magni, nulla natus cumque dolorem laboriosam maiores deleniti unde rerum cupiditate beatae sit tenetur pariatur quasi fugiat atque saepe nostrum error recusandae ut. Earum adipisci amet quas inventore quam aperiam nemo quis soluta nobis voluptatem totam in corporis assumenda officiis quos natus, dolorem debitis, iusto repudiandae. Accusantium aut magni, consequatur molestias adipisci officia. Veniam totam ab nam similique nostrum doloremque, aperiam rem eaque sapiente consectetur eos error sint? Voluptatem impedit amet voluptas, perspiciatis saepe voluptates! Veritatis enim sit facere vel repellat, officia repellendus autem accusantium optio.`,
  },
};

const Side = () => {
  const [selectedPost, setSelectedPost] = useState("mindfulness");

  const post = blogPosts[selectedPost];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-xl mb-6"
          />
          <p className="text-gray-600 text-base mb-6">{post.content}</p>

          {/* First Gallery */}
          {post.images && post.images.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                More Images
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {post.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Extra visual ${index + 1}`}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Second Paragraph */}
          <p className="text-gray-600 text-base mb-6">{post.peragraph}</p>

          {/* Second Gallery */}
       
     </div>

        {/* Sidebar */}
        <aside className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Related Topics
          </h2>
          <div className="space-y-4">
            {Object.entries(blogPosts).map(([key, post]) => (
              <button
                key={key}
                onClick={() => setSelectedPost(key)}
                className="flex items-start space-x-4 w-full text-left hover:bg-gray-100 p-2 rounded-xl"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-xl w-20 h-20 object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {post.content.slice(0, 60)}...
                  </p>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Side;
