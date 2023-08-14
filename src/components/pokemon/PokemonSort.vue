<template>
  <ul>
    <li><label for="number">
        <input type="radio" name="sort" value="number" />
        <span>Sort by <b>number</b></span>
      </label></li>
    <li><label for="total">
        <input type="radio" name="sort" value="total" />
        <span>Sort by <b>total</b></span>
      </label></li>
    <li><label for="hp">
        <input type="radio" name="sort" value="hp" />
        <span>Sort by <b>hp</b></span>
      </label></li>
    <li><label for="attack">
        <input type="radio" name="sort" value="attack" />
        <span>Sort by <b>attack</b></span>
      </label></li>
    <li><label for="defense">
        <input type="radio" name="sort" value="defense" />
        <span>Sort by <b>defense</b></span>
      </label></li>
    <li><label for="sp_atk">
        <input type="radio" name="sort" value="sp_atk" />
        <span>Sort by <b>sp_atk</b></span>
      </label></li>
    <li><label for="sp_def">
        <input type="radio" name="sort" value="sp_def" />
        <span>Sort by <b>sp_def</b></span>
      </label></li>
    <li><label for="speed">
        <input type="radio" name="sort" value="speed" />
        <span>Sort by <b>speed</b></span>
      </label></li>
  </ul>
  <div>
    <base-button mode="bgColor-type_1">Filter by type_1</base-button>
    <base-button mode="bgColor-type_2">Filter by type_2</base-button>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}

ul li {
  display: flex;
  width: 25%;
  padding: 5px 0;
}

@media screen and (max-width: 1024px) {
  ul li {
    width: 33.33%;
  }
}

@media screen and (max-width: 767px) {
  ul li {
    width: 100%
  }
}

ul label span {
  margin-left: 5px;
}

button {
  margin-right: 1rem;
}
</style>