<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{$route.query.locale}}</p>
        <p>q: {{$route.query.q}}</p>
        <hr>
        <button class="btn btn-primary">Confrim</button>
        <div style="height:700px"></div>
        <p id="data">Some extra Data</p>
    </div>
</template>