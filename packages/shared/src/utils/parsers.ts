import { z } from 'zod';

const bigintStringSchema = z.string().refine(
	(val) => {
		try {
			BigInt(val); // Пытаемся преобразовать в BigInt
			return true;
		} catch {
			return false;
		}
	},
	{
		message: 'Строка должна быть валидным bigint числом'
	}
);
export const parsedNumberSchema = bigintStringSchema.transform((val) => Number(val));
