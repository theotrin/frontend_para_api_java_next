"use client";
import { useState } from "react";
import style from "./create.module.scss";
import api from "@/services/api";
import { Modal } from "@/components/Modal";

export default function Create() {
  const [price, setPrice] = useState();
  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [open, setOpen] = useState<boolean>(false);

  console.log(open);

  const handleChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setPrice(value);
  };

  return (
    <div className={style.container}>
      <h1>Cadastrar um produto novo!</h1>

      <Modal isOpen={open} setOpen={setOpen} />

      <div className={style.nameProduct}>
        <span>Nome: </span>
        <input
          type="text"
          value={nameProduct}
          onChange={(e) => {
            setNameProduct(e.target.value);
          }}
          placeholder="Nome do produto!"
        />
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
          value={descriptionProduct}
          onChange={(e) => {
            setDescriptionProduct(e.target.value);
          }}
          placeholder="Fale um pouco sobre seu produto e dos beneficios dele"
        />
      </div>
      <div>
        <button
          onClick={() => {
            try {
              if (
                nameProduct == "" ||
                price == undefined ||
                descriptionProduct == ""
              ) {
                return alert("Todos os campos devem ser preenchidos");
              }

              setOpen(!open);
              setNameProduct("");
              setDescriptionProduct("");
              setPrice("");
              return api.post("/products", {
                name: nameProduct,
                price: price,
                description: descriptionProduct,
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <span>Cadastrar Produto</span>
          <i></i>
        </button>
      </div>
    </div>
  );
}
