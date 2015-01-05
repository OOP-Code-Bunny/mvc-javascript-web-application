{{each}}
  <li class="item" itemid={{$value["id"]}}>
    <img src="images/missing.png" />
      {{if $value["first_name"]}}
        <span class="name">{{$value["first_name"]}}{{$value["last_name"]}}</span>
      {{else}}
        <span class="name empty">No Name</span>
      {{/if}}
    <span class="cta">&gt;</span>
  </li>
{{/each}}


