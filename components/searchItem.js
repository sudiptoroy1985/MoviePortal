import FormControl from '@material-ui/core/FormControl';
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import { Component } from "react";

export default(props) =>  (
        <div>
          <div className="search-pane">
            <FormControl>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <SearchIcon />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Search a movie" onChange={e => props.search(e.target.value)} />
                </Grid>
              </Grid>
            </FormControl>
          </div>
          <style jsx>{`
            .search-pane {
              display: flex;
              justify-content: space-between;
            }
          `}
          </style>
        </div>
 )