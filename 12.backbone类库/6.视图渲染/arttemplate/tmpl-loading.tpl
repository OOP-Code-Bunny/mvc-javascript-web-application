<div class="fp-content-loading">
{{each}}
  <p class="title">第{{$index}}条数据</p>
  <p>id:<span>{{$value['id']}}</span></p>
  <p>name:<span>{{$value['name']}}</span></p>
  <p>thing:<span>{{$value['thing']}}</span></p>
{{/each}}
</div>


