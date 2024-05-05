export default function AttributionsModal({ toggleFunction }: { toggleFunction: Function }) {
  return (
    <div className="flex items-center justify-center fixed p-0 m-0 left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40">
      <div>
        <div className="bg-zinc-900 p-5 rounded-lg">
          <div className="flex justify-between">
            <div className="text-2xl">Attributions</div>
            <button onClick={() => toggleFunction()} className="text-2xl select-none transition-all hover:text-zinc-300">&#215;</button>
          </div>
          <div className="text-lg">
            <div className="pt-5">
              <div className="text-xl">Heuristics</div>
              <div>Heuristics and Textbook Video explanations created by <a className="underline" target="_blank" href="https://www.nngroup.com/articles/ten-usability-heuristics/" title="Freepik">Nielsen Normal Group</a></div>
            </div>

            <div className="pt-5">
              <div className="text-xl">Icons</div>
              <div>Feather icons at <a className="underline" target="_blank" href="https://feathericons.com/" title="Freepik">https://feathericons.com/</a></div>

              <div>React Icons at <a className="underline" target="_blank" href="https://github.com/react-icons/react-icons#readme" title="Freepik">https://github.com/react-icons</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}