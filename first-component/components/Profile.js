export function Profile() {
    return (
      <>
        <h1>Arthur Silveira</h1>
        <img 
            src="/profile.jpg"
            height={150}
            width={150}
            alt="MinhaImagem"
        />
        <p>Oi, eu sou <strong>Arthur!</strong> Apenas mais um estudante de 20 anos que ama tecnologia.</p>
        <br></br>
        <p>Desenvolvo meus projetos normalmente usando <strong>React</strong>, <strong>Typescript</strong>, <strong>Tailwind e Vite</strong>. Entretanto, estou sempre aberto a recomendações de novas linguagens e ferramentas!</p>
        <br></br>
        <p>Quando não estou programando, gosto de ficar jogando <strong>Dungeons and Dragons</strong> com meus amigos ou ficar escutando músicas dos mais diversos gêneros. (The Strokes é minha banda favorita)</p>
      </>
    );
}