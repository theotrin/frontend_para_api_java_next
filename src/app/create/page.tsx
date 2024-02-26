import style from "./create.module.scss";

export default function Create() {
  return (
    <div className={style.container}>
      <h1>Cadastrar um produto novo!</h1>

      <div className={style.nameProduct}>
        <span>Nome: </span> <input type="text" placeholder="Nome do produto!" />
      </div>
      <div className={style.priceProduct}>
        <span>Preço: </span>{" "}
        <input type="number" placeholder="valor do seu produto em centavos" />
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
