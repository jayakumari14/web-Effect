var users = [
  {
    profilepic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Chennai, India",
    name: "Jaya",
    age: 25,
    interests: ["reading, playing"],
    bio: "loreum ipsum",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1574701147838-eb4e86cce813?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "Kavya",
    age: 21,
    interests: ["reading, playing"],
    bio: "loreum ipsum",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1578753792716-cf9a3073671d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1578581947808-a4141502a8d6?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Bangalore, India",
    name: "Navya",
    age: 27,
    interests: ["reading, playing"],
    bio: "loreum ipsum",
    isFriend: null,
  },
  {
    profilepic:
      "https://plus.unsplash.com/premium_photo-1664369473321-864d03df2fa0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Hyderabad, India",
    name: "Sherry",
    age: 20,
    interests: ["reading, playing"],
    bio: "loreum ipsum",
    isFriend: null,
  },
];

function select(elm) {
  return document.querySelector(elm);
}
let curr = 0;
let isAnimating = false(function initials() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;
  select(".profileimg img").src = users[curr].profilepic;
  select(".badge h5").textContent = users[curr].pendingMessage;
  select(".location h3").textContent = users[curr].location;
  select(".name h1:nth-child(1)").textContent = users[curr].name;
  select(".name h1:nth-child(2)").textContent = users[curr].age;

  var clutter = "";
  users[curr].interests.forEach(function (interest) {
    clutter += ` <div
class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3"
>
<i class="text-sm ri-music-2-fill"></i>
<h3 class="text-sm tracking-tight capitalize">${interest}</h3>
</div>`;
  });
  select(".tags ").innerHTML = clutter;
  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingCard");
        incoming.classList.remove("z - [2]");
        incoming.classList.add("z - [3]");
        incoming.classList.remove("incomingCard");

        main.classList.remove("z - [3]");
        main.classList.add("z - [2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;

        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingCard");
      },
    });

    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    );
    tl.from(
      ".incomingCard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click", function () {
  imageChange();
});
