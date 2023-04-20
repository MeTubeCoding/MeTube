function ListeVideoChaine(props: { className?: string }) {
    const { className } = props;{
    return(
        <div className="flex flex-wrap ">
        <div className="ml-8 bg-white rounded-xl shadow-md overflow-hidden w-80 h-40">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img className="h-48 w-full object-cover md:w-48" src="" alt="Video thumbnail"/>
    </div>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Title of the Video</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Channel Name</a>
      <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet enim sed nibh tincidunt, sed cursus enim rhoncus.</p>
      <div className="mt-4">
        <span className="text-gray-400">Views: 1,234</span>
        <span className="ml-2 text-gray-400">Likes: 567</span>
      </div>
  </div>
</div>
</div>
    )
}

}
export default ListeVideoChaine;