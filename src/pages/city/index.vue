<template>
    <div class="map-page">
        <div class="map-header">
            <div class="mp-header">
                <router-link to='/'><a class="mp-header-left iconfont">&#xe624;</a></router-link>
                <h1 class="mp-header-title">
                    <div class="mp-header-citycon">
                        <span class="mp-header-city mp-header-city-active">国内</span>
                        <span class="mp-header-city">海外</span>
                    </div>
                </h1>
                <span class="mp-header-right" mp-role="right"></span></div>
        </div>
        <div class="mp-main">
            <div class="mp-header-keyword">
                <input type="text" placeholder="输入城市名或拼音" class="mp-city-keyword"style="text-align: center;">
            </div>
            <div>
                <div class="mp-cityarea-group">
                  <div class="mp-cityarea-title mpf-border-bottom">您的位置</div>
                  <div class="mp-cityarea-content mp-city-now mpf-border-bottom">
                      <div class="mp-cityitem-light">
                          <router-link to="/">
                              <a href="" class="mp-cityitem-name mpg-ellipsis mp-cityitem-seleted">北京
                              </a>
                          </router-link>
                      </div>
                  </div>
                </div>
            </div>
            <div>
                <div class="mp-cityarea-group">
                  <!-- 热门城市 -->
                    <div class="mp-cityarea-title mpf-border-bottom">热门城市</div>
                    <div class="mp-cityarea-content mp-city-now mpf-border-bottom">
                        <div class="mp-cityitem-light" v-for="item in hotCity" :key="item.id"><a href="" class="mp-cityitem-name  mpg-ellipsis">{{item.cityName}}</a></div>
                    </div>
                  <!-- A -->
                    <div class="mp-cityarea-title mpf-border-bottom">A</div>
                    <a href="" v-for="city in A" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- B -->
                    <div class="mp-cityarea-title mpf-border-bottom">B</div>
                    <a href="" v-for="city in B" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- C -->
                    <div class="mp-cityarea-title mpf-border-bottom">C</div>
                    <a href="" v-for="city in C" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- D -->
                    <div class="mp-cityarea-title mpf-border-bottom">D</div>
                    <a href="" v-for="city in D" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- E -->
                    <div class="mp-cityarea-title mpf-border-bottom">E</div>
                    <a href="" v-for="city in E" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- F -->
                    <div class="mp-cityarea-title mpf-border-bottom">F</div>
                    <a href="" v-for="city in F" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- H -->
                    <div class="mp-cityarea-title mpf-border-bottom">H</div>
                    <a href="" v-for="city in H" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- J -->
                    <div class="mp-cityarea-title mpf-border-bottom">J</div>
                    <a href="" v-for="city in J" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- K -->
                    <div class="mp-cityarea-title mpf-border-bottom">K</div>
                    <a href="" v-for="city in K" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- L -->
                    <div class="mp-cityarea-title mpf-border-bottom">L</div>
                    <a href="" v-for="city in L" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- M -->
                    <div class="mp-cityarea-title mpf-border-bottom">M</div>
                    <a href="" v-for="city in M" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- N -->
                    <div class="mp-cityarea-title mpf-border-bottom">N</div>
                    <a href="" v-for="city in N" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- P -->
                    <div class="mp-cityarea-title mpf-border-bottom">P</div>
                    <a href="" v-for="city in P" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- Q -->
                    <div class="mp-cityarea-title mpf-border-bottom">Q</div>
                    <a href="" v-for="city in Q" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- R -->
                    <div class="mp-cityarea-title mpf-border-bottom">R</div>
                    <a href="" v-for="city in R" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- S -->
                    <div class="mp-cityarea-title mpf-border-bottom">S</div>
                    <a href="" v-for="city in S" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- T -->
                    <div class="mp-cityarea-title mpf-border-bottom">T</div>
                    <a href="" v-for="city in T" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- W -->
                    <div class="mp-cityarea-title mpf-border-bottom">W</div>
                    <a href="" v-for="city in W" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- X -->
                    <div class="mp-cityarea-title mpf-border-bottom">X</div>
                    <a href="" v-for="city in X" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- Y -->
                    <div class="mp-cityarea-title mpf-border-bottom">Y</div>
                    <a href="" v-for="city in Y" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                  <!-- Z -->
                    <div class="mp-cityarea-title mpf-border-bottom">Z</div>
                    <a href="" v-for="city in Z" :key="city.id" class="mp-cityitem-normal mpf-border-bottom">{{city.cityName}}</a>
                </div>
            </div>
            <div class="mp-alphabet">
              <div class="mp-alphabet-item" v-for="letter in letters">{{letter.letter}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
      name: 'City',
      data () {
        return {
          hotCity: [],
          letters: [],
          A: [],
          B: [],
          C: [],
          D: [],
          E: [],
          F: [],
          H: [],
          J: [],
          K: [],
          L: [],
          M: [],
          N: [],
          P: [],
          Q: [],
          R: [],
          S: [],
          T: [],
          W: [],
          X: [],
          Y: [],
          Z: []
        }
      },
      methods: {
        getCityData () {
          axios.get('/static/city.json')
          .then(this.handleGetDataSucc.bind(this))
        },
        handleGetDataSucc (res) {
          const data = res.data
          if (data && data.data && data.data.hotCity && data.data.letters) {
            this.hotCity = data.data.hotCity
            this.letters = data.data.letters
            this.A = data.data.A
            this.B = data.data.B
            this.C = data.data.C
            this.D = data.data.D
            this.E = data.data.E
            this.F = data.data.F
            this.H = data.data.H
            this.J = data.data.J
            this.K = data.data.K
            this.L = data.data.L
            this.M = data.data.M
            this.N = data.data.N
            this.P = data.data.P
            this.Q = data.data.Q
            this.R = data.data.R
            this.S = data.data.S
            this.T = data.data.T
            this.W = data.data.W
            this.X = data.data.X
            this.Y = data.data.Y
            this.Z = data.data.Z
          }
        }
      },
      created () {
        this.getCityData()
      }
    }
</script>

<style scoped>
.map-header {
    position: fixed;
    top: 0;
    left: 0;
    height: .88rem;
    width: 100%;
    background: #00afc7;
    color: #fff;
    z-index: 100;
}
.mp-header-left {
    display: inline-block;
    width: .4rem;
    line-height: .88rem;
    padding: 0 .22rem;
    font-size: .36rem;
    color: #fff;
    float: left;
}
.mp-header-title {
    box-sizing: border-box;
    position: relative;
    text-align: center;
}
.mp-header-citycon {
    display: inline-block;
    margin-left: -.42rem;
    font-size: 0;
}
.mp-header-city {
    display: inline-block;
    width: 2rem;
    height: .56rem;
    line-height: .56rem;
    margin-top: .15rem;
    font-size: .28rem;
    border: .02rem solid #fff;
    border-radius: .02rem;
}
.mp-header-city-active {
    background: #fff;
    color: #00afc7;
}
.mp-city-keyword {
    display: block;
    width: 100%;
    height: .3rem;
    line-height: .3rem;
    padding: .16rem 0 .16rem .1rem;
    background: #fff;
    border: 0;
}
.mp-header-keyword {
    margin-top: .88rem;
    padding: 0 .2rem .1rem .2rem;
    background: #00afc7;
    font-size: .26rem;
    color: #9e9e9e;
}
.mp-cityarea-title {
    line-height: .54rem;
    padding-left: .3rem;
    color: #616161;
    font-size: .26rem;
    background: #eee;
}
.mp-cityarea-title::after ,.mp-cityarea-content::after{
    content: "";
    position: absolute;
    background: #c9cccd;
    left: 0;
    width: 100%;
    height:.02rem;
}
.mp-city-now {
    padding-bottom: .26rem;
}
.mp-cityarea-content {
    overflow: hidden;
    padding-right: .5rem;
    padding-left: .2rem;
    background: #fff;
}
.mp-cityitem-light {
    box-sizing: border-box;
    float: left;
    width: 33.33%;
    padding: .2rem .14rem 0 .1rem;
}
.mp-cityitem-seleted {
    border-color: #00afc7;
    color: #00afc7;
}
.mp-cityitem-name {
    display: block;
    line-height: 28px;
    text-align: center;
    border: .02rem solid #c9cccd;
    border-radius: .06rem;
}
.mpg-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-city-now {
    padding-top: .04rem;
    padding-bottom: .26rem;
}
.mp-cityarea-content {
    overflow: hidden;
    padding-right: .5rem;
    padding-left: .2rem;
    background: #fff;
}
.mpf-border-bottom {
    position: relative;
}
.mp-cityitem-light {
    box-sizing: border-box;
    float: left;
    width: 33.33%;
    padding: .2rem .14rem 0 .1rem;
}
.mp-cityitem-name {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mpg-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-cityitem-normal {
    display: block;
    line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #000;
}
.mp-cityitem-normal::after {
    content: "";
    position: absolute;
    transform: scaleY(.51);
    left: 0;
    width: 100%;
    height: .02rem;
    background: #c9cccd;
}
.mp-alphabet {
    position: fixed;
    right: 0;
    top: 144px;
}
.mp-alphabet-item {
    width: .32rem;
    line-height: .32rem;
    padding-left: .2rem;
    color: #00afc7;
    font-size: .24rem;
    text-align: center;
}