<template>
    <div>
        <h2>Component A</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae, ut itaque aspernatur fugiat voluptates
            voluptatibus similique eum repellat quidem commodi laboriosam accusamus mollitia animi ab rem esse ipsum
            pariatur.
            Consequatur odit quos soluta sapiente, numquam porro! Aperiam molestiae tempore molestias. Assumenda id
            labore eos. Dolor laboriosam doloremque, error totam quis asperiores adipisci nobis a tempore,
            necessitatibus dolorum eaque voluptatum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo officiis voluptatibus commodi voluptas. Ipsa
            repellendus aliquid itaque ea fugit voluptatibus tenetur temporibus? Quod, debitis deleniti. Doloremque sed
            accusamus quasi. Quas!
            Doloribus possimus perferendis dignissimos aspernatur est eos saepe culpa optio veritatis non, ea vel fugit
            officiis sit autem repudiandae ad eum temporibus quo explicabo illum ab vero. Voluptatibus, magni quas.
            Sequi aperiam, inventore voluptates explicabo ullam libero harum, earum porro recusandae blanditiis
            laudantium obcaecati asperiores cupiditate, labore delectus dicta tempora culpa magni veniam placeat ratione
            nulla. Reprehenderit aspernatur voluptatum tempore!
            Error necessitatibus autem explicabo, ipsa id, enim recusandae, quisquam fugit optio labore est sequi
            voluptatum similique corrupti libero delectus temporibus quos laborum tempora blanditiis consequatur
            dolorum? Praesentium ullam id deserunt.
            Ducimus aspernatur saepe ea quos voluptates a, vel voluptatem dolore ipsa non sit vero eius quibusdam minima
            sed. Tempora reiciendis quo mollitia dolor voluptatibus? Amet tempore aperiam ratione nihil et!
            Reprehenderit nulla omnis facere voluptas dolor voluptate, ea unde, atque illum minus quibusdam nobis
            dolorum autem numquam consequuntur officia fugiat distinctio quas! Dolore repellendus voluptatum tenetur ab
            consequuntur quam obcaecati!
            Tenetur, illo sit. Nisi, cum nam. Provident ullam sunt qui consectetur ab amet quos voluptate sint
            asperiores eos quis, dolor placeat obcaecati eligendi magni ea, eaque aspernatur voluptas non similique!
            Culpa velit, perferendis maiores odit facilis possimus soluta odio voluptatibus corporis earum! Minus
            consequuntur earum inventore aut animi quo. Ratione nam ducimus labore dolores unde non obcaecati sunt in
            quo?
            Aperiam eos praesentium sunt nihil fugiat vitae, dolores odit maxime impedit neque harum voluptate odio.
            Possimus est neque, fuga cumque animi, aspernatur repellendus tempore dolorem quas culpa ipsum aliquid
            dolor?</p>
        <button @click="rta = true">aceptar</button>
        <button :style="!rta && { background: 'red' }" @click=" rta = false">cancelar</button>
        <p v-show="rta != null">{{ rta ? 'acepto las condiciones de uso' : 'no acepto las condiciones de uso' }}</p>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue"

const rta = ref()
const saludo = ref("")
saludo.value = "saludo del setup"
console.log(saludo.value)




</script>

<style scoped>
button {
    background-color: rgb(2, 117, 83);
    margin: 0.5rem;
    transition: 0.5s ease-in-out all;

    &:hover {
        background-color: green;
    }
}
</style>