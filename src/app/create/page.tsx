"use client";
import { HtmlHTMLAttributes, useState } from "react";
import style from "./create.module.scss";

export default function Create() {
  const [price, setPrice] = useState();

  const handleChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setPrice(value);
  };

  return (
    <div className={style.container}>
      <h1>Cadastrar um produto novo!</h1>

      <div className={style.nameProduct}>
        <span>Nome: </span> <input type="text" placeholder="Nome do produto!" />
      </div>
      <div className={style.priceProduct}>
        <span>Preço: </span>{" "}
        <input
          value={price}
          onChange={handleChange}
          placeholder="Informe o valor do produto em centavos"
          min="0"
        />
      </div>
      <div className={style.descriptionProduct}>
        <span>Descrição: </span>
        <input
          type="text"
          placeholder="Fale um pouco sobre seu produto e dos beneficios dele"
        />
      </div>
      <div>
        <button>
          <span>Cadastrar Produto</span>
          <i></i>
        </button>
      </div>
    </div>
  );
}
