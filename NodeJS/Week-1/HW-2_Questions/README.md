# How can we cancel reading files when the program continue?

If we want to stop/cancel reading files, we need AbortController and signal

```js
const controller = new AbortController();
const signal = controller.signal;
```

We can cancel reading whenever we want

```js
controller.abort();
```

Then pass to place where you write signal

```js
doSomethingAsync({ signal })
	.then...
```

# Is there any efficiency way to use less memory?

fs.readFile() function buffers the entire file. Using fs.createReadStream() is more efficient way to use less memory.

## License

[MIT](https://github.com/dogancanulgu)
