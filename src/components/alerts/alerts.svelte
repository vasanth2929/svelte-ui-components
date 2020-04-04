<script>
// Import Core Modules 
import {fly,slide} from 'svelte/transition';
import {flip} from 'svelte/animate';
// Import Internal Modules
import {store} from './utils'; 
import Alert from './alert.svelte';

// @desc Contains array of alert
// @example [{type,msg,id}]
let alerts = [];

// subscribe to the store
store.subscribe(value=>{
    alerts = [...value] ;
})

</script>

{#if alerts.length > 0}
  <div class="alerts" tranition:slide>
    {#each alerts as  item (item.id)}
      <div animate:flip transition:fly={{x:20}} class={`alert alert-${item.type}`} >
        <Alert {...item} />
      </div>        
    {/each}
  </div>
{/if}

<style>
.alerts{
    position: fixed;
    top: 20px;
    right: 50px;
}
.alert{
  margin: 10px;
  width: 380px;
  padding: 10px;
  position: relative;
}
.alert-success{
  background: rgb(171, 241, 100);
  color: darkgreen;
  border-radius: 5px;
}
.alert-danger{
  background: rgb(250, 151, 151);
  color:darkred;
  border-radius: 5px;
}
.alert-info{
  background: skyblue;
  color: darkblue;
  border-radius: 5px;
}
@media screen and (max-width:560px){
  .alerts{
    width: 90%;
    margin: auto;
    left:4%;
  }
  .alert{
    width: 100%;
    margin: 5px;
  }
}
</style>