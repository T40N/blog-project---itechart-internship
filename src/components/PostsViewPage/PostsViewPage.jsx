import Post from "../PostSnippet/PostSnippet";
import { useState } from "react";
import { PostsContainer, MainPage } from "./styled";
import { Theme } from "../../context";

const DATA = [
  {
    title: "Monster",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et. Enim diam vulputate ut pharetra. Aliquam purus sit amet luctus venenatis. Non consectetur a erat nam. Vel facilisis volutpat est velit egestas. Nunc id cursus metus aliquam. Lorem ipsum dolor sit amet. Sem et tortor consequat id porta nibh venenatis cras. Id porta nibh venenatis cras sed felis eget velit. Auctor urna nunc id cursus metus aliquam. Non odio euismod lacinia at quis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Blandit turpis cursus in hac habitasse platea dictumst quisque. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nunc id cursus metus aliquam eleifend. Tristique risus nec feugiat in fermentum posuere urna. Vitae tortor condimentum lacinia quis vel. Imperdiet dui accumsan sit amet. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Odio aenean sed adipiscing diam donec adipiscing. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Tortor at auctor urna nunc id cursus metus. Posuere ac ut consequat semper viverra. Vel pretium lectus quam id leo. Fermentum dui faucibus in ornare quam viverra orci sagittis. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Cras tincidunt lobortis feugiat vivamus at.",
    author: "unknown",
    id: 1,
  },
  {
    title: "hfddsa",
    body: "gfdgdsa",
    author: "mario the plumer",
    id: 2,
  },
  {
    title: "dsa",
    body: "dsaddsa aaa ddsafaa aaasdaaa aaaaa aaadsa aaaaaa Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et. Enim diam vulputate ut pharetra. Aliquam purus sit amet luctus venenatis. Non consectetur a erat nam. Vel facilisis volutpat est velit egestas. Nunc id cursus metus aliquam. Lorem ipsum dolor sit amet. Sem et tortor consequat id porta nibh venenatis cras. Id porta nibh venenatis cras sed felis eget velit.",
    author: "mario",
    id: 3,
  },
  {
    title: "fdsf",
    body: "fsfsf",
    author: "Pablo Carrera",
    id: 4,
  },
  {
    title: "dsadas",
    body: "dsadad",
    id: 5,
  },
  {
    title: "sfd",
    body: "dsad",
    id: 6,
  },
  {
    title: "das",
    body: "dsadasdasdasd",
    id: 7,
  },
  {
    title: "Animal farm",
    body: "Mr. Jones, of the Manor Farm, had locked the hen-houses\nfor the night, but was too drunk to remember to shut the\npop-holes. With the ring of light from his lantern dancing\nfrom side to side, he lurched across the yard, kicked off\nhis boots at the back door, drew himself a last glass of\nbeer from the barrel in the scullery, and made his way\nup to bed, where Mrs. Jones was already snoring.\nAs soon as the light in the bedroom went out there was\na stirring and a fluttering all through the farm buildings.\nWord had gone round during the day that old Major, the\nprize Middle White boar, had had a strange dream on the\nprevious night and wished to communicate it to the other\nanimals. It had been agreed that they should all meet\nin the big barn as soon as Mr. Jones was safely out of\nthe way. Old Major (so he was always called, though the\nname under which he had been exhibited was Willingdon\nBeauty) was so highly regarded on the farm that everyone\nwas quite ready to lose an hour’s sleep in order to hear\nwhat he had to say.\nAt one end of the big barn, on a sort of raised platform, Major was already ensconced on his bed of straw,\nunder a lantern which hung from a beam. He was twelve\nyears old and had lately grown rather stout, but he was\nstill a majestic-looking pig, with a wise and benevolent\nappearance in spite of the fact that his tushes had never\nbeen cut. Before long the other animals began to arrive\nand make themselves comfortable after their different\nAnimal Farm: A Fairy Story – 26 – Chapter I\nfashions. First came the three dogs, Bluebell, Jessie, and\nPincher, and then the pigs, who settled down in the straw\nimmediately in front of the platform. The hens perched\nthemselves on the window-sills, the pigeons fluttered up\nto the rafters, the sheep and cows lay down behind the\npigs and began to chew the cud. The two cart-horses,\nBoxer and Clover, came in together, walking very slowly\nand setting down their vast hairy hoofs with great care\nlest there should be some small animal concealed in the\nstraw. Clover was a stout motherly mare approaching\nmiddle life, who had never quite got her figure back after\nher fourth foal. Boxer was an enormous beast, nearly\neighteen hands high, and as strong as any two ordinary\nhorses put together. A white stripe down his nose gave\nhim a somewhat stupid appearance, and in fact he was\nnot of first-rate intelligence, but he was universally respected for his steadiness of character and tremendous\npowers of work. After the horses came Muriel, the white\ngoat, and Benjamin, the donkey. Benjamin was the oldest\nanimal on the farm, and the worst tempered. He seldom\ntalked, and when he did, it was usually to make some\ncynical remark—for instance, he would say that God had\ngiven him a tail to keep the flies off, but that he would\nsooner have had no tail and no flies. Alone among the\nanimals on the farm he never laughed. If asked why, he\nwould say that he saw nothing to laugh at. Nevertheless,\nwithout openly admitting it, he was devoted to Boxer; the\ntwo of them usually spent their Sundays together in the\nsmall paddock beyond the orchard, grazing side by side\nand never speaking.\nThe two horses had just lain down when a brood of\nducklings, which had lost their mother, filed into the barn,\nAnimal Farm: A Fairy Story – 27 – Chapter I\ncheeping feebly and wandering from side to side to find\nsome place where they would not be trodden on. Clover\nmade a sort of wall round them with her great foreleg,\nand the ducklings nestled down inside it and promptly\nfell asleep. At the last moment Mollie, the foolish, pretty\nwhite mare who drew Mr. Jones’s trap, came mincing\ndaintily in, chewing at a lump of sugar. She took a place\nnear the front and began flirting her white mane, hoping\nto draw attention to the red ribbons it was plaited with.\nLast of all came the cat, who looked round, as usual,\nfor the warmest place, and finally squeezed herself in\nbetween Boxer and Clover; there she purred contentedly\nthroughout Major’s speech without listening to a word of\nwhat he was saying.\nAll the animals were now present except Moses, the\ntame raven, who slept on a perch behind the back door.\nWhen Major saw that they had all made themselves comfortable and were waiting attentively, he cleared his throat\nand began:\n“Comrades, you have heard already about the strange\ndream that I had last night. But I will come to the dream\nlater. I have something else to say first. I do not think,\ncomrades, that I shall be with you for many months\nlonger, and before I die, I feel it my duty to pass on to you\nsuch wisdom as I have acquired. I have had a long life,\nI have had much time for thought as I lay alone in my\nstall, and I think I may say that I understand the nature\nof life on this earth as well as any animal now living. It is\nabout this that I wish to speak to you.\n“Now, comrades, what is the nature of this life of ours?\nLet us face it: our lives are miserable, laborious, and\nshort. We are born, we are given just so much food as\nAnimal Farm: A Fairy Story – 28 – Chapter I\nwill keep the breath in our bodies, and those of us who\nare capable of it are forced to work to the last atom of our\nstrength; and the very instant that our usefulness has\ncome to an end we are slaughtered with hideous cruelty.\nNo animal in England knows the meaning of happiness\nor leisure after he is a year old. No animal in England is\nfree. The life of an animal is misery and slavery: that is\nthe plain truth.\n“But is this simply part of the order of nature? Is it\nbecause this land of ours is so poor that it cannot afford\na decent life to those who dwell upon it? No, comrades, a\nthousand times no! The soil of England is fertile, its climate is good, it is capable of affording food in abundance\nto an enormously greater number of animals than now\ninhabit it. This single farm of ours would support a dozen\nhorses, twenty cows, hundreds of sheep—and all of them\nliving in a comfort and a dignity that are now almost\nbeyond our imagining. Why then do we continue in this\nmiserable condition? Because nearly the whole of the\nproduce of our labour is stolen from us by human beings.\nThere, comrades, is the answer to all our problems. It is\nsummed up in a single word—Man. Man is the only real\nenemy we have. Remove Man from the scene, and the\nroot cause of hunger and overwork is abolished for ever.",
    id: 8,
  },
  {
    title: "dsdasd",
    body: "dsadasds adddddddddddd dddddddd ddddddddddddddddd dddddddddddddddddddddddddddddddddddddddd sadddddddddddddddd dsaaaaaaaaa dwwwwwadw da",
    id: 9,
  },
  {
    title: "weqewe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum. Felis eget nunc lobortis mattis aliquam faucibus. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Mollis nunc sed id semper risus in hendrerit. Mauris cursus mattis molestie a. Elementum facilisis leo vel fringilla est. Mi proin sed libero enim sed faucibus turpis in. Non enim praesent elementum facilisis leo vel fringilla est.\n\nDuis at tellus at urna condimentum mattis. Suscipit adipiscing bibendum est ultricies integer. Eget egestas purus viverra accumsan in nisl. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Mattis enim ut tellus elementum sagittis vitae et leo. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Non nisi est sit amet. Egestas erat imperdiet sed euismod nisi porta lorem. Velit laoreet id donec ultrices tincidunt arcu non. Ultrices dui sapien eget mi. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Urna duis convallis convallis tellus id interdum. Risus nullam eget felis eget. Molestie at elementum eu facilisis sed. Amet consectetur adipiscing elit pellentesque. Ac tincidunt vitae semper quis. Urna molestie at elementum eu facilisis. Neque volutpat ac tincidunt vitae semper quis. A diam sollicitudin tempor id eu nisl. Elit pellentesque habitant morbi tristique.\n\nA pellentesque sit amet porttitor eget dolor morbi non arcu. Leo a diam sollicitudin tempor id eu nisl nunc mi. Eu mi bibendum neque egestas congue quisque egestas diam in. Amet massa vitae tortor condimentum lacinia quis vel eros. In fermentum posuere urna nec tincidunt praesent semper. In vitae turpis massa sed elementum tempus. Arcu non odio euismod lacinia at quis risus. Laoreet id donec ultrices tincidunt. Arcu ac tortor dignissim convallis aenean et. Nisl purus in mollis nunc sed id semper risus in. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Ut pharetra sit amet aliquam id. Integer feugiat scelerisque varius morbi enim. Eu consequat ac felis donec et odio pellentesque. Tellus id interdum velit laoreet id donec. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Mi quis hendrerit dolor magna. Morbi non arcu risus quis. Sed odio morbi quis commodo.\n\nFermentum posuere urna nec tincidunt praesent semper feugiat nibh. Enim diam vulputate ut pharetra sit amet aliquam. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Tristique senectus et netus et malesuada fames ac turpis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Sollicitudin ac orci phasellus egestas tellus. Pharetra magna ac placerat vestibulum lectus mauris. Id porta nibh venenatis cras sed felis eget velit aliquet. Massa id neque aliquam vestibulum morbi blandit cursus risus at.\n\nDictum at tempor commodo ullamcorper a lacus. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Dictum at tempor commodo ullamcorper a. Accumsan lacus vel facilisis volutpat est velit egestas dui. Arcu dictum varius duis at consectetur lorem donec massa sapien. Tristique senectus et netus et malesuada fames ac turpis. Volutpat consequat mauris nunc congue nisi. Sollicitudin ac orci phasellus egestas tellus. Congue quisque egestas diam in arcu. Diam in arcu cursus euismod.\n\nMorbi tristique senectus et netus et malesuada. Bibendum enim facilisis gravida neque convallis a. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Lobortis elementum nibh tellus molestie nunc non blandit massa. Laoreet non curabitur gravida arcu ac tortor dignissim. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Arcu cursus vitae congue mauris rhoncus. Dignissim suspendisse in est ante in nibh. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Elementum eu facilisis sed odio morbi quis commodo odio. Sed lectus vestibulum mattis ullamcorper velit sed. Nunc eget lorem dolor sed.",
    id: 10,
  },
];

const Options = (blogs) => {
  let options = [];
  if (blogs) {
    const length = Math.ceil(blogs.length / 3);
    for (let i = 1; i <= length; i++) {
      options.push(<option value={i}>{i}</option>);
    }
  }
  return options;
};

export default function PostsView() {
  // const posts = useSelector((state) => state.posts);
  // const dispatch = useDispatch();
  const [blogs, setBlogs] = useState(DATA);
  const [index, setIndex] = useState(1);

  let blogsOnPage;
  let options;

  // dispatch(newPost(post));

  if (blogs) {
    console.log("jeje");
    const arrayStart = 3 * index - 3;
    const arrayEnd = 3 * index;
    blogsOnPage = blogs.slice(arrayStart, arrayEnd);
    options = Options(blogs);
  }

  const snippets = blogsOnPage.map((blog) => (
    <Post blog={blog} key={blog.id} />
  ));

  return (
    <Theme>
      <MainPage>
        <PostsContainer>
          {/* {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>} */}
          {blogs && snippets}
        </PostsContainer>
        <select value={index} onChange={(e) => setIndex(e.target.value)}>
          {options}
        </select>
      </MainPage>
    </Theme>
  );
}

//zrob porządną paginacje
