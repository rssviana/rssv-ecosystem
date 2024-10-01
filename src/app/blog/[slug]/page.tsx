"use client"
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const { slug } = useParams();  // Captura o valor do parâmetro de URL
  console.log(`meu slug capturado é: ${slug}`);

  return (
    <div>
      <h1>Post: {slug}</h1>
      <p>Aqui estará o conteúdo do post para o slug: {slug}</p>
    </div>
  );
}