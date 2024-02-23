import Container from "react-bootstrap/Container";
import style from "./page.module.scss";

export default function Home() {
  return (
    <div className={style.container}>
      <h1>Lista de produtos</h1>
      <div className={style.productsContainer}>
        <div className={style.productTitle}>
          <h2 className={style.productName}>Macbook M1</h2>
          <h2 className={style.productPrice}>Preço: 120000</h2>
        </div>
        <div className={style.productDescription}>
          <p>
            descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque nisi et maiores quisquam hic molestiae rerum eaque quaerat
            voluptate veniam aspernatur eveniet tempora reiciendis a
            perspiciatis nihil repellat ullam, nostrum earum voluptates saepe
            soluta rem quam. Voluptatem ratione rem error incidunt similique
            placeat quis sit architecto molestias recusandae sapiente, soluta,
            explicabo suscipit, fuga vitae corporis! Distinctio et suscipit
            corrupti assumenda iure, ratione eligendi quos iste? Voluptates odio
            amet exercitationem accusantium ullam pariatur commodi ut ea nobis
            fugiat, id fuga repellat facilis quidem magni ad autem cupiditate?
            Esse impedit illum ab nemo ipsam, reiciendis perspiciatis quam nulla
            ex maxime dolorum officia?
          </p>
        </div>
      </div>
    </div>
  );
}
