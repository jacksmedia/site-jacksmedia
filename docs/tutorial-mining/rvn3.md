---
sidebar_position: 4
---

# Download Mining Tool

## nanominer is our choice
The signature "KAWPOW" algorithm that makes Ravencoin so democratic and strong runs great in this barebones miner.

Grab the Windows x64 download. It can go right on the \Desktop.

![](../../static/img/024.png)



## 1. Open the nanominer directory, open the **config.ini** file

![](../../static/img/026.png)

OK, this is almost an empty script file: only the very last

```code
wallet=nnnnnn...
```

line of this code gets read by nanominer. The ; lines are invisible to the software (like it says in the file).

So all you have in this code is a wallet address line right now-- and it's not even your wallet! 🙈

![](../../static/img/027.png)

## 2. Add Your Wallet & Email

You'll want to add a few lines to this file to set up Ravencoin mining AND point the payout at your wallet address. Make your **config.ini** file look something like this one (the line order does not matter).

![](../../static/img/028.png)

Here's an example for you to Copy/Paste/Edit with your own wallet address & email.

```code
[KawPow]
coin=Rvn
sortPools=true
autoUpdate=true
wallet=RDhE9ZEEcRn38x5tQiYvv9gT7MXfwL82By
rigName=SocksPC
email=alex@j4cks.com
```
> The optional value rigName is helpful if you have more than one mining computer.

## 3. Double Click nanominer.exe to test

You may be all set to mine! Give it a try and see what your PC looks like.

![](../../static/img/030.png)

## 4. Confirm your machine is working with Nanopool

This part is hecka cool! 🙀 Go to the following webpage, using your own wallet address not mine:

```code
https://rvn.nanopool.org/account/RDhE9ZEEcRn38x5tQiYvv9gT7MXfwL82By
```

If you see some data coming from your mining rig at your wallet address site, congratulations!

![](../../static/img/029.png)