<view class="container">
    <image mode="aspectFit" src="/img/logo.png"></image>
   <textarea class="inputtext" placeholder="请输入题目" bindinput="input" bindfocus='cfinput' value="{{experssNu}}" />
   <view class="one {{showView?'show':'hide'}}">
    <navigator class="a1">题目：</navigator><textarea class="xstext" bindblur="bindTextAreaBlur" auto-height value="{{tm_data}}" />
    <navigator class="a2">答案：</navigator><textarea class="xstext" bindblur="bindTextAreaBlur" auto-height value="{{da_data}}" />
   </view>
   <view style="width: 100%; display:flex;flex-direction: row;">
    <button class="btnstyl"  bindtap="btnClick">查询</button> <button class="btnstyr" type="primary" bindtap="copyBtn">复制</button>
   </view>
   <view class="content">
    <navigator> 公众号搜题：灵心夜音</navigator>
    </view>
</view>
