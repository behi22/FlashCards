const Home = () => {
  return (
    <div id="intro">
      <textarea readOnly cols="width" rows={5}>
        Welcome to FlashCards by Behbod Babai. This is a solo project that I've
        been working on, so that I can exercise working with React-Redux. In
        this application you can create topics and quizzes for your topics. Your
        quizzes must contain at least one flashcard and no flashcards can have
        an empty side. Clicking on flashcards will make them flip and show you
        the other side.
      </textarea>
    </div>
  );
};

export default Home;
