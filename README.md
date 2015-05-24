
# Angular Sns Share

http://kashiro.github.io/angular-sns-share/app

## Facebook

* platform {String}: 'facebook' (fixed)
* url {String} : url you want to share (option). if you do not set current url is shared.

## Twitter

* platform {String}: 'twitter' (fixed)
* url{String} : url you want to share (option). if you do not set current url is shared.
* text {String}: text you want to share (option)

# Example

```
<ul>
  <li><button ng-sns-share url="https://github.com/kashiro/angular-sns-share" platform="facebook">share facebook</button></li>
  <li><button ng-sns-share url="https://github.com/kashiro/angular-sns-share" platform="twitter" text="angular module for sharing to sns #angular #facebook #twitter">share twitter</button></li>
</ul>
```
