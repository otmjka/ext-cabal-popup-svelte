import { toast } from '@zerodevx/svelte-toast'

const OPTIONS = {
  duration: 3000,
  intro: {
    y: -100,
    duration: 250,
  },
}

export const toaster = {
  message(message: string, title = '', options = {}) {
    const content = `<div class="toast-item--content toast-item--content__info">
      ${title.length > 0 ? `<p class="toast-item--title">${title}</p>`: ''}
      <p class="toast-item--text">${message}</p>
    </div>`;

    return toast.push(content, {
      theme: {
        '--toastBackground': '#36383C',
      },
      ...OPTIONS,
      ...options,
    });
  },

  error(message: string, title = '', options = {}) {
    const content = `<div class="toast-item--content toast-item--content__error">
          ${title.length > 0 ? `<p class="toast-item--title">${title}</p>`: ''}
          <p class="toast-item--text">${message}</p>
        </div>`;
    return toast.push(content, {
      theme: {
        '--toastBackground': '#36383C',
      },
      ...OPTIONS,
      ...options,
    });
    // toast.error(message, { ...OPTIONS, ...options });
  },

  success(message: string, title = '', options = {}) {
    const content = `<div class="toast-item--content toast-item--content__success">
      ${title.length > 0 ? `<p class="toast-item--title">${title}</p>`: ''}
      <p class="toast-item--text">${message}</p>
    </div>`;
    return toast.push(content, {
      theme: {
        '--toastBackground': '#36383C',
      },
      ...OPTIONS,
      ...options,
    });
    // toast.success(message, { ...OPTIONS, ...options });
  }
}
