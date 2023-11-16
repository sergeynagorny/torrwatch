import * as React from 'react';
import { forwardRef } from 'react';

import { useForm } from 'react-hook-form';

import { useAddTorrent } from '@/features/torrent/add-torrent/api';

import { Jacket } from '@/entities/jacket';

import { Button } from '@/shared/components/ui/button';
import { Checkbox } from '@/shared/components/ui/checkbox.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/shared/components/ui/form.tsx';
import { cn } from '@/shared/lib/utils.ts';

export interface AddTorrentFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  data: Jacket;
  onSuccess?: () => void;
}

export const AddTorrentForm = forwardRef<HTMLFormElement, AddTorrentFormProps>(
  ({ data, onSuccess, className, ...props }, ref) => {
    const { magnet } = data;

    const form = useForm({
      defaultValues: {
        urls: [magnet],
        sequentialDownload: true,
        paused: false,
      },
    });
    const { mutate, isPending } = useAddTorrent();

    const handleSubmit = form.handleSubmit((data) => mutate(data, { onSuccess }));

    return (
      <Form {...form}>
        <form className={cn('space-y-3', className)} ref={ref} {...props} onSubmit={handleSubmit}>
          <FormField
            control={form.control}
            name="paused"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-2 shadow">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="w-full space-y-1 leading-none">
                  <FormLabel className="w-full">Paused</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sequentialDownload"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-2 shadow">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="w-full space-y-1 leading-none">
                  <FormLabel className="w-full">Sequential Download</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button disabled={isPending} className="mt-2 w-full">
            Add Torrent
          </Button>
        </form>
      </Form>
    );
  },
);
