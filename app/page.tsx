import Feed from "@components/Feed"

const HomePage = () => {
  return <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">Discover & Share <br className="mx-md:hidden" />
    <span>AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">EachPrompt is an AI prompting tool for modern world to discover, create and share creative prompts</p>

    {/* Feed Component */}
    <Feed />
  </section>
}

export default HomePage
