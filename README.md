# React Modal

## Demos
For demos please follow this link [demo](https://quantdanish.github.io/ReactPoc)

## Instructions
Run following command to install dependency and run on localhost.
```
npm install
npm start
```

## Features
  1. Styled with bootstrap 4 so suitable for most of web application.
  2. You may customise modal as per your requirement.
  3. Easy to use and efficient.

### Simple modal
If you want to just display some message to user.

```javascript
<Modal 
  open={openModal}
  content="Hey guys !"
  closeHandler={() => setOpenModal(false)}
/>
```