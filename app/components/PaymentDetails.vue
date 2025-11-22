<script setup lang="ts">
import { PHONE_NUMBER } from '~/config/constants'

const config = useRuntimeConfig()

const isCopied = ref(false)

const copyPixKeyToClipboard = () => {
	navigator.clipboard.writeText(config.public.PIX_KEY)
		.then(() => {
			isCopied.value = true
			setTimeout(() => {
				isCopied.value = false
			}, 2000)
		})
}

const sharePaymentProof = () => {
	const message = 'Olá, acabei de realizar o pagamento do meu pedido. Segue o comprovante em anexo.'
	const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
	window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
	<div class="payment__icon">
		<phosphor-icon
			name="seal-check"
			weight="bold"
		/>
	</div>

	<div class="payment__header">
		<h3 class="payment__title">
			Pedido realizado com sucesso
		</h3>

		<p class="payment__description">
			Realize o pagamento abaixo para confirmarmos sua participação. Após o pagamento, envie o comprovante para nós.
		</p>
	</div>

	<div class="payment__qr-code">
		<img
			src="/assets/images/qrcode-pix.png"
			alt="QR Code para pagamento via Pix"
		>
	</div>

	<div class="clipboard">
		<label
			class="clipboard__label"
			for="pix-key"
		>
			Chave do Pix
		</label>

		<div class="clipboard__control">
			<input
				id="pix-key"
				type="text"
				:value="config.public.PIX_KEY"
				disabled
				class="clipboard__field"
			>

			<button
				type="button"
				title="Copiar"
				aria-label="Copiar chave pix"
				class="clipboard__copy-button"
				@click="copyPixKeyToClipboard()"
			>
				<phosphor-icon
					v-if="isCopied"
					name="check"
					weight="bold"
					color="var(--color-success)"
				/>

				<phosphor-icon
					v-else
					name="copy"
					weight="bold"
					color="var(--color-text-secondary)"
				/>
			</button>
		</div>
	</div>

	<div class="payment__share">
		<base-button
			variant="success"
			@click="sharePaymentProof()"
		>
			<phosphor-icon
				name="whatsapp-logo"
			/>

			Compartilhar comprovante
		</base-button>
	</div>
</template>

<style lang="scss" scoped>
.payment {
  &__icon {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: var(--color-success);
    display: grid;
    place-items: center;
    border: 0.8rem solid #D6F1E3;

    svg {
      font-size: 2rem;
      color: var(--color-white);
    }
  }

  &__header {
    margin-block: 2rem;
  }

  &__title {
    font-size: var(--text-lg);
    margin-bottom: 0.4rem;
  }

  &__description {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
  }

  &__qr-code {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    img {
      height: 200px;
      width: 200px;
      display: block;
    }
  }

  &__share {
    margin-top: 2.4rem;

    button {
      width: 100%;

      svg {
        font-size: 2.4rem;
      }
    }
  }
}

.clipboard {
  &__label {
    display: block;
    font-size: var(--text-sm);
    line-height: 2rem;
    margin-bottom: 0.6rem;
    color: var(--text-primary);
  }

  &__control {
    display: flex;
    align-items: stretch;
    gap: 0.4rem;
  }

  &__field {
    width: 100%;
    padding: 1rem 1.4rem;
    border: 0.1rem solid var(--color-border);
    border-radius: 0.8rem;
  }

  &__copy-button {
    height: 4rem;
    width: 4rem;
    appearance: none;
    border: 0;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
}
</style>
