<template>
  <section class="guide">
    <div id="install">
      <h2>Install</h2>
      <h5>Via npm</h5>
      <p><code>npm i vue-roast</code></p>
      <h5>Register plugin</h5>
      <pre>
        <code>
          import VueRoast from 'vue-roast';
          Vue.use(VueRoast, config);
        </code>
      </pre>
      <h4>Config</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
            <th style="text-align:center">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ttl</td>
            <td>Number</td>
            <td>Default toast message ttl</td>
            <td style="text-align:center">5000</td>
          </tr>
          <tr>
            <td>threshold</td>
            <td>Number|Boolean</td>
            <td>Max number of displayed toasts at a time (false to disable)</td>
            <td style="text-align:center">3</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="guide">
      <h2>Guide</h2>
      <p>In component:</p>
      <pre><code>this.$toast(message, options);</code></pre>
      <p>Outside of component</p>
      <pre><code>Vue.toast(message, options);</code></pre>
      <h4>Message</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>String</td>
          </tr>
          <tr>
            <td>content</td>
            <td>String</td>
          </tr>
          <tr>
            <td>creator</td>
            <td>String</td>
          </tr>
          <tr>
            <td>level</td>
            <td>String</td>
          </tr>
          <tr>
            <td>createdAt</td>
            <td>Date</td>
          </tr>
        </tbody>
      </table>
      <h4>
        <a></a>Options</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ttl</td>
            <td>Number</td>
            <td>Toast message display time in miliseconds</td>
          </tr>
          <tr>
            <td>truncateAfter</td>
            <td>Number</td>
            <td>Max message char length to display</td>
          </tr>
          <tr>
            <td>action</td>
            <td>Object</td>
            <td>Action triggered on toast click</td>
          </tr>
          <tr>
            <td>action.placeholder</td>
            <td>String</td>
            <td>Action placeholder</td>
          </tr>
          <tr>
            <td>action.method</td>
            <td>String</td>
            <td>Method to be invoked on click</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
